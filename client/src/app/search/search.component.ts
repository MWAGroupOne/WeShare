import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  template: `
  <fieldset class="scheduler-border">
    <legend class="scheduler-border">Advanced Search</legend>
     <div id="custom-search-input">
                <div class="input-group col-md-12">
                    <input type="text" class="form-control input-lg" placeholder="Search Item" />
                    <span class="input-group-btn">
                        <button class="btn btn-info btn-lg" type="button">
                            <i class="glyphicon glyphicon-search"></i>
                        </button>
                    </span>
                </div>
                <label class="checkbox-inline">
      <input type="checkbox" value="">Name
    </label>
    <label class="checkbox-inline">
      <input type="checkbox" value="">Location
    </label>
    <label class="checkbox-inline">
      <input type="checkbox" value="">Offered
    </label>
    <div>
     <label>From<input type="text" placeholder="dd/mm/yyyy"  class="form-control" /> </label>
     <label>To<input type="text" placeholder="dd/mm/yyyy"  class="form-control" /> </label>
    </div>
            </div>
            </fieldset>
  `,
  styles: [`fieldset.scheduler-border {
    border: 1px groove #ddd !important;
    padding: 0 1.4em 1.4em 1.4em !important;
    margin: 0 0 1.5em 0 !important;
    -webkit-box-shadow:  0px 0px 0px 0px #000;
            box-shadow:  0px 0px 0px 0px #000;
}

    legend.scheduler-border {
        font-size: 1.2em !important;
        font-weight: bold !important;
        text-align: left !important;
        width:auto;
        padding:0 10px;
        border-bottom:none;
    }`]
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
