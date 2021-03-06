// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import { expect } from 'chai';

import { KernelMessage } from '@jupyterlab/services';

describe('kernel/messages', () => {
  describe('KernelMessage.isStreamMsg()', () => {
    it('should check for a stream message type', () => {
      let msg = KernelMessage.createMessage({
        msgType: 'stream',
        channel: 'iopub',
        session: 'baz'
      });
      expect(KernelMessage.isStreamMsg(msg)).to.equal(true);
      msg = KernelMessage.createMessage({
        msgType: 'foo',
        channel: 'iopub',
        session: 'baz'
      });
      expect(KernelMessage.isStreamMsg(msg)).to.equal(false);
    });
  });

  describe('KernelMessage.isDisplayDataMsg()', () => {
    it('should check for a display data message type', () => {
      let msg = KernelMessage.createMessage({
        msgType: 'display_data',
        channel: 'iopub',
        session: 'baz'
      });
      expect(KernelMessage.isDisplayDataMsg(msg)).to.equal(true);
      msg = KernelMessage.createMessage({
        msgType: 'foo',
        channel: 'iopub',
        session: 'baz'
      });
      expect(KernelMessage.isDisplayDataMsg(msg)).to.equal(false);
    });
  });

  describe('KernelMessage.isExecuteInputMsg()', () => {
    it('should check for a execute input message type', () => {
      let msg = KernelMessage.createMessage({
        msgType: 'execute_input',
        channel: 'iopub',
        session: 'baz'
      });
      expect(KernelMessage.isExecuteInputMsg(msg)).to.equal(true);
      msg = KernelMessage.createMessage({
        msgType: 'foo',
        channel: 'iopub',
        session: 'baz'
      });
      expect(KernelMessage.isExecuteInputMsg(msg)).to.equal(false);
    });
  });

  describe('KernelMessage.isExecuteResultMsg()', () => {
    it('should check for an execute result message type', () => {
      let msg = KernelMessage.createMessage({
        msgType: 'execute_result',
        channel: 'iopub',
        session: 'baz'
      });
      expect(KernelMessage.isExecuteResultMsg(msg)).to.equal(true);
      msg = KernelMessage.createMessage({
        msgType: 'foo',
        channel: 'iopub',
        session: 'baz'
      });
      expect(KernelMessage.isExecuteResultMsg(msg)).to.equal(false);
    });
  });

  describe('KernelMessage.isStatusMsg()', () => {
    it('should check for a status message type', () => {
      let msg = KernelMessage.createMessage({
        msgType: 'status',
        channel: 'iopub',
        session: 'baz'
      });
      expect(KernelMessage.isStatusMsg(msg)).to.equal(true);
      msg = KernelMessage.createMessage({
        msgType: 'foo',
        channel: 'iopub',
        session: 'baz'
      });
      expect(KernelMessage.isStatusMsg(msg)).to.equal(false);
    });
  });

  describe('KernelMessage.isClearOutputMsg()', () => {
    it('should check for a clear output message type', () => {
      let msg = KernelMessage.createMessage({
        msgType: 'clear_output',
        channel: 'iopub',
        session: 'baz'
      });
      expect(KernelMessage.isClearOutputMsg(msg)).to.equal(true);
      msg = KernelMessage.createMessage({
        msgType: 'foo',
        channel: 'iopub',
        session: 'baz'
      });
      expect(KernelMessage.isClearOutputMsg(msg)).to.equal(false);
    });
  });

  describe('KernelMessage.isCommOpenMsg()', () => {
    it('should check for a comm open message type', () => {
      let msg = KernelMessage.createMessage({
        msgType: 'comm_open',
        channel: 'iopub',
        session: 'baz'
      });
      expect(KernelMessage.isCommOpenMsg(msg)).to.equal(true);
      msg = KernelMessage.createMessage({
        msgType: 'foo',
        channel: 'iopub',
        session: 'baz'
      });
      expect(KernelMessage.isCommOpenMsg(msg)).to.equal(false);
    });
  });

  describe('KernelMessage.isErrorMsg()', () => {
    it('should check for an message type', () => {
      let msg = KernelMessage.createMessage({
        msgType: 'error',
        channel: 'iopub',
        session: 'baz'
      });
      expect(KernelMessage.isErrorMsg(msg)).to.equal(true);
      msg = KernelMessage.createMessage({
        msgType: 'foo',
        channel: 'iopub',
        session: 'baz'
      });
      expect(KernelMessage.isErrorMsg(msg)).to.equal(false);
    });
  });

  describe('KernelMessage.isInputRequestMsg()', () => {
    it('should check for an input_request message type', () => {
      let msg = KernelMessage.createMessage({
        msgType: 'input_request',
        channel: 'stdin',
        session: 'baz'
      });
      expect(KernelMessage.isInputRequestMsg(msg)).to.equal(true);
      msg = KernelMessage.createMessage({
        msgType: 'foo',
        channel: 'stdin',
        session: 'baz'
      });
      expect(KernelMessage.isStatusMsg(msg)).to.equal(false);
    });
  });
});
