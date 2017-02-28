import {Component, OnInit, Inject} from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import {BPMNService} from "../service/bpmn.service";

const modeler = require("bpmn-js/lib/Modeler.js");
const propertiesPanelModule = require('bpmn-js-properties-panel');
const propertiesProviderModule = require('bpmn-js-properties-panel/lib/provider/camunda');
const camundaModdleDescriptor = require('camunda-bpmn-moddle');

const containerRef = '#js-canvas';
const propsPanelRef = '#js-properties-panel';


@Component({
    selector: 'bpmn',
    templateUrl: './bpmn.component.html',
    styleUrls: ['./bpmn.component.css'],
    providers: [BPMNService]
})
export class BPMNComponent implements OnInit {
    modeler: any;

    constructor(@Inject(DOCUMENT) private document, private bpmnService: BPMNService) {
    }

    ngOnInit() {
        let canvas = this.document.getElementById('js-canvas');
        let container = this.document.getElementById('js-drop-zone');
        let propspanel = this.document.getElementById('js-properties-panel');

        this.modeler = new modeler({
            container: canvas,
            propertiesPanel: {
                parent: propspanel
            },
            additionalModules: [
                propertiesPanelModule,
                propertiesProviderModule
            ],
            moddleExtensions: {
                camunda: camundaModdleDescriptor
            }
        });

        this.modeler.createDiagram();
        container.setAttribute('class', 'with-diagram');
    }

    setDiagramXML(model: string):Promise<void> {
        let m = this.modeler;
        return new Promise(
            function (resolve, reject) {
                m.importXML(model, function (err) {
                    if (err) {
                        reject(err);
                    } else {
                        var canvas = m.get('canvas');
                        // zoom to fit full viewport
                        canvas.zoom('fit-viewport');
                        resolve();
                    }
                });
            });
    }

    clearDiagramXML(): void {
        this.modeler.createDiagram();
    }

    getDiagramXML():Promise<string> {
        let m = this.modeler;
        return new Promise<string>(
            function (resolve, reject) {
                m.saveXML({format: true},
                    function (err, xml) {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(xml);
                        }
                    });
            });
    }
}
