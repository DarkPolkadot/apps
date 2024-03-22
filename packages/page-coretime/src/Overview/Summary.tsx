// Copyright 2017-2024 @polkadot/app-explorer authors & contributors
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import { CardSummary, SummaryBox } from '@polkadot/react-components';
import { useApi } from '@polkadot/react-hooks';

import Timeslice from './Timeslice.js';
import { useTranslation } from '../translate.js';
import Cores from './Cores.js';
import Pools from './Pools.js';


function Summary (): React.ReactElement {
  const { t } = useTranslation();
  const { api } = useApi();

  return (
    <SummaryBox>
      <section>
        {api.query.broker && (
          <>
            <CardSummary label={t('current timeslice')}>
              <Timeslice />
            </CardSummary>
            <CardSummary label={t('core count')}>
              <Cores />
            </CardSummary>
            <CardSummary label={t('pool size')}>
              <Pools />
            </CardSummary>
          </>

        )}
      </section>
    </SummaryBox>
  );
}

export default React.memo(Summary);
