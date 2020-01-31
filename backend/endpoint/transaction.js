const express = require('express')
const router = express.Router()
const Transaction = require('../models/transaction')

router.get('/transaction', async (req, res) => {
  const result = await Transaction.aggregate([
    // {
    //   $match: {
    //     total: 630
    //   }
    // },
    {
        $lookup: {
            from: 'users',
            localField: 'staff_id',
            foreignField: '_id',
            as: 'staff_id'
        }
    },
    {
        $unwind: '$staff_id'
    },
    {
        $project: {
            __v: 0
        }
    }
  ])

  result.map(item => {
      item.staff_id = item.staff_id.username
      return item
  })

  console.log(result)
  res.json({ result: result, message: 'Transaction Successfully' })
})

router.get('/transaction/:id', async (req, res) => {
    try {
        const id = req.params.id
        console.log(id)
        const result = await Transaction.aggregate([
            {
                $project: {
                    __v: 0
                }
            },
            {
              $match: {
                product_id: id
              }
            },
            {
                $lookup: {
                    from: 'users',
                    localField: 'staff_id',
                    foreignField: '_id',
                    as: 'staff_id'
                }
            },
            {
                $unwind: '$staff_id'
            },
        ])
        console.log(result)
        result.map(item => {
            item.staff_id = item.staff_id.username
            return item
        })
    
        console.log(result)
        res.json({ result: result, message: 'Transaction Successfully' })
    } catch (error) {
        res.status(500).json({result: error, message: 'Failure'})
    }
})

module.exports = router
