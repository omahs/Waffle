import './types';
import {supportBigNumber} from './matchers/bigNumber';
import {supportReverted} from './matchers/reverted';
import {supportRevertedWith} from './matchers/revertedWith';
import {supportEmit} from './matchers/emit';
import {supportProperAddress} from './matchers/properAddress';
import {supportProperPrivateKey} from './matchers/properPrivateKey';
import {supportProperHex} from './matchers/properHex';
import {supportHexEqual} from './matchers/hexEqual';
import {supportChangeBalance} from './matchers/changeBalance';
import {supportChangeBalances} from './matchers/changeBalances';
import {supportChangeEtherBalance} from './matchers/changeEtherBalance';
import {supportChangeEtherBalances} from './matchers/changeEtherBalances';
import {supportChangeTokenBalance} from './matchers/changeTokenBalance';
import {supportChangeTokenBalances} from './matchers/changeTokenBalances';
import {supportCalledOnContract} from './matchers/calledOnContract/calledOnContract';
import {supportCalledOnContractWith} from './matchers/calledOnContract/calledOnContractWith';
import './inject-call-history';

export function waffleChai(chai: Chai.ChaiStatic, utils: Chai.ChaiUtils) {
  supportBigNumber(chai.Assertion, utils);
  supportReverted(chai.Assertion);
  supportRevertedWith(chai.Assertion);
  supportEmit(chai.Assertion);
  supportProperAddress(chai.Assertion);
  supportProperPrivateKey(chai.Assertion);
  supportProperHex(chai.Assertion);
  supportHexEqual(chai.Assertion);
  supportChangeBalance(chai.Assertion);
  supportChangeBalances(chai.Assertion);
  supportChangeEtherBalance(chai.Assertion);
  supportChangeEtherBalances(chai.Assertion);
  supportChangeTokenBalance(chai.Assertion);
  supportChangeTokenBalances(chai.Assertion);
  supportCalledOnContract(chai.Assertion);
  supportCalledOnContractWith(chai.Assertion);
}
