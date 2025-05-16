"use strict";

import test from 'ava';
import mock from 'mock-require';

// mock @printags/node-pcsclite to allow to simulate cards
import pcscliteMock from './helpers/pcsclite-mock';
mock('@printags/node-pcsclite', pcscliteMock);
const NFC = require('../src/NFC').default;



test('first', t => {

	const nfc = new NFC();

	t.truthy(1 === 1);

});
