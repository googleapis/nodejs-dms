// Copyright 2021 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


'use strict';

function main(parent) {
  // [START datamigration_v1_generated_DataMigrationService_ListMigrationJobs_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The parent, which owns this collection of migrationJobs.
   */
  // const parent = 'abc123'
  /**
   *  The maximum number of migration jobs to return. The service may return
   *  fewer than this value. If unspecified, at most 50 migration jobs will be
   *  returned. The maximum value is 1000; values above 1000 will be coerced to
   *  1000.
   */
  // const pageSize = 1234
  /**
   *  The nextPageToken value received in the previous call to
   *  migrationJobs.list, used in the subsequent request to retrieve the next
   *  page of results. On first call this should be left blank. When paginating,
   *  all other parameters provided to migrationJobs.list must match the call
   *  that provided the page token.
   */
  // const pageToken = 'abc123'
  /**
   *  A filter expression that filters migration jobs listed in the response.
   *  The expression must specify the field name, a comparison operator, and the
   *  value that you want to use for filtering. The value must be a string,
   *  a number, or a boolean. The comparison operator must be
   *  either =, !=, >, or <. For example, list migration jobs created this year
   *  by specifying **createTime %gt; 2020-01-01T00:00:00.000000000Z.**
   *  You can also filter nested fields. For example, you could specify
   *  **reverseSshConnectivity.vmIp = "1.2.3.4"** to select all migration
   *  jobs connecting through the specific SSH tunnel bastion.
   */
  // const filter = 'abc123'
  /**
   *  Sort the results based on the migration job name.
   *  Valid values are: "name", "name asc", and "name desc".
   */
  // const orderBy = 'abc123'

  // Imports the Clouddms library
  const {DataMigrationServiceClient} = require('@google-cloud/dms').v1;

  // Instantiates a client
  const clouddmsClient = new DataMigrationServiceClient();

  async function listMigrationJobs() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const iterable = await clouddmsClient.listMigrationJobsAsync(request);
    for await (const response of iterable) {
        console.log(response);
    }
  }

  listMigrationJobs();
  // [END datamigration_v1_generated_DataMigrationService_ListMigrationJobs_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
