/*
 * Copyright 2025 coze-dev Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
 
import { useEffect } from 'react';

import {
  useCurrentEntity,
  useRefresh,
} from '@flowgram-adapter/free-layout-editor';
import { WorkflowNodeOutputVariablesData } from '@coze-workflow/variable';
import { type OutputValueVO } from '@coze-workflow/base/types';

import { type VariableTagProps } from './variable-tag-list';
export function useOutputsVariableTags(
  outputs: OutputValueVO[] = [],
): VariableTagProps[] {
  const node = useCurrentEntity();
  const refresh = useRefresh();

  const outputVariablesData: WorkflowNodeOutputVariablesData = node.getData(
    WorkflowNodeOutputVariablesData,
  );

  const variableTags = outputs.map(
    (output): VariableTagProps => ({
      label: output.name,
      type:
        output.type ||
        outputVariablesData.getVariableByKey(output.name)?.viewType,
    }),
  );

  useEffect(() => {
    const disposable = outputVariablesData.onAnyVariablesChange(() => {
      // Refresh after variable type changes
      refresh();
    });

    return () => disposable?.dispose();
  }, [outputVariablesData, refresh]);

  return variableTags;
}
