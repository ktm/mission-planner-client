import { Injectable } from '@angular/core';

@Injectable()
export class BPMNService {

    currentModel:string;

  constructor() { }

  save(id:string, model:string) {
  }

  load(modelId:string):Promise<string> {
      return Promise.resolve("<?xml version=\"1.0\" encoding=\"UTF-8\"?>" +
      "<bpmn:definitions xmlns:bpmn=\"http://www.omg.org/spec/BPMN/20100524/MODEL\" xmlns:bpmndi=\"http://www.omg.org/spec/BPMN/20100524/DI\" xmlns:di=\"http://www.omg.org/spec/DD/20100524/DI\" xmlns:dc=\"http://www.omg.org/spec/DD/20100524/DC\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns:vendor=\"http://vendor\" id=\"Definitions_1\" targetNamespace=\"http://bpmn.io/schema/bpmn\">" +
          "<bpmn:process id=\"Process_1\" isExecutable=\"false\">" +
          "<bpmn:startEvent id=\"StartEvent_1\">" +
          "<bpmn:outgoing>SequenceFlow_1</bpmn:outgoing>" +
      "</bpmn:startEvent>" +
      "<bpmn:task id=\"Task_1\">" +
          "<bpmn:incoming>SequenceFlow_1</bpmn:incoming>" +
      "<bpmn:outgoing>SequenceFlow_2</bpmn:outgoing>" +
      "</bpmn:task>" +
      "<bpmn:sequenceFlow id=\"SequenceFlow_1\" sourceRef=\"StartEvent_1\" targetRef=\"Task_1\" name=\"FOO > BAR?\">" +
          "<bpmn:conditionExpression xsi:type=\"bpmn:tFormalExpression\">${foo > bar}</bpmn:conditionExpression>" +
      "</bpmn:sequenceFlow>" +
      "<bpmn:endEvent id=\"EndEvent_1\">" +
          "<bpmn:incoming>SequenceFlow_2</bpmn:incoming>" +
      "</bpmn:endEvent>" +
      "<bpmn:sequenceFlow id=\"SequenceFlow_2\" sourceRef=\"Task_1\" targetRef=\"EndEvent_1\" />" +
          "</bpmn:process>" +
      "<bpmndi:BPMNDiagram id=\"BPMNDiagram_1\">" +
          "<bpmndi:BPMNPlane id=\"BPMNPlane_1\" bpmnElement=\"Process_1\">" +
          "<bpmndi:BPMNShape id=\"_BPMNShape_StartEvent_2\" bpmnElement=\"StartEvent_1\">" +
          "<dc:Bounds x=\"173\" y=\"102\" width=\"36\" height=\"36\" />" +
          "</bpmndi:BPMNShape>" +
      "<bpmndi:BPMNShape id=\"Task_1_di\" bpmnElement=\"Task_1\">" +
          "<dc:Bounds x=\"319\" y=\"80\" width=\"100\" height=\"80\" />" +
          "</bpmndi:BPMNShape>" +
      "<bpmndi:BPMNEdge id=\"SequenceFlow_1_di\" bpmnElement=\"SequenceFlow_1\">" +
          "<di:waypoint xsi:type=\"dc:Point\" x=\"209\" y=\"120\" />" +
          "<di:waypoint xsi:type=\"dc:Point\" x=\"319\" y=\"120\" />" +
          "<bpmndi:BPMNLabel>" +
      "<dc:Bounds x=\"219\" y=\"110\" width=\"90\" height=\"20\" />" +
          "</bpmndi:BPMNLabel>" +
      "</bpmndi:BPMNEdge>" +
      "<bpmndi:BPMNShape id=\"EndEvent_1_di\" bpmnElement=\"EndEvent_1\">" +
          "<dc:Bounds x=\"531\" y=\"102\" width=\"36\" height=\"36\" />" +
          "<bpmndi:BPMNLabel>" +
      "<dc:Bounds x=\"504\" y=\"138\" width=\"90\" height=\"20\" />" +
          "</bpmndi:BPMNLabel>" +
      "</bpmndi:BPMNShape>" +
      "<bpmndi:BPMNEdge id=\"SequenceFlow_2_di\" bpmnElement=\"SequenceFlow_2\">" +
          "<di:waypoint xsi:type=\"dc:Point\" x=\"419\" y=\"120\" />" +
          "<di:waypoint xsi:type=\"dc:Point\" x=\"531\" y=\"120\" />" +
          "<bpmndi:BPMNLabel>" +
      "<dc:Bounds x=\"430\" y=\"110\" width=\"90\" height=\"20\" />" +
          "</bpmndi:BPMNLabel>" +
      "</bpmndi:BPMNEdge>" +
      "</bpmndi:BPMNPlane>" +
      "</bpmndi:BPMNDiagram>" +
      "</bpmn:definitions>");
  }
}
