import { Component, OnInit } from '@angular/core';
import { NetworkService } from 'src/app/services/network.service';
import { TransactionResponse, TransactionResult } from 'src/app/models/transaction.model';

@Component({
  selector: 'app-transaction-home',
  templateUrl: './transaction-home.component.html',
  styleUrls: ['./transaction-home.component.css']
})
export class TransactionHomeComponent implements OnInit {

  mDataArray: TransactionResult[] = [];

  constructor(private networkService: NetworkService) { }

  ngOnInit() {
    this.feedData();
  }

  async feedData() {
    let result = await this.networkService.getTransaction().toPromise();
    console.log(result);
    var items = result.result as TransactionResult[];
    this.mDataArray = items;
  }

}
