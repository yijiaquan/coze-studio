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
 
import { I18n } from '@coze-arch/i18n';

export const MAX_UPLOAD_PROGRESS = 100;

export const UPLOAD_FILE_TIMEOUT = 60000;

export const FILE_EXCEEDS_LIMIT_I18N_KEY = 'files_exceeds_limit';

export const getFileSizeReachLimitI18n = ({ limitText = '20MB' }) =>
  I18n.t('file_too_large', {
    max_size: limitText,
  });
