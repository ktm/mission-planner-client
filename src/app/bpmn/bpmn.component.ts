import { Component, OnInit } from '@angular/core';

var Modeler = require('bpmn-js/lib/Modeler');
var propertiesPanelModule = require('bpmn-js-properties-panel');
//var propertiesProviderModule = require('bpmn-js-properties-panel/lib/provider/bpmn');

//var propertiesProviderModule = require('bpmn-js-properties-panel/lib/provider/camunda');
var camundaModdleDescriptor = require('camunda-bpmn-moddle/resources/camunda.json');

@Component({
  selector: 'bpmn',
  templateUrl: './bpmn.component.html',
  styleUrls: ['./bpmn.component.css']
})
export class BPMNComponent implements OnInit {

  ngOnInit() {
  }
}
