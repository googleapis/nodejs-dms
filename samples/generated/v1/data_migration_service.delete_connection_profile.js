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

function main(name) {
  // [START datamigration_v1_generated_DataMigrationService_DeleteConnectionProfile_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. Name of the connection profile resource to delete.
   */
  // const name = 'abc123'
  /**
   *  A unique id used to identify the request. If the server receives two
   *  requests with the same id, then the second request will be ignored.
   *  It is recommended to always set this value to a UUID.
   *  The id must contain only letters (a-z, A-Z), numbers (0-9), underscores
   *  (_), and hyphens (-). The maximum length is 40 characters.
   */
  // const requestId = 'abc123'
  /**
   *  In case of force delete, the CloudSQL replica database is also deleted
   *  (only for CloudSQL connection profile).
   */
  // const force = true

  // Imports the Clouddms library
  const {DataMigrationServiceClient} = require('@google-cloud/dms').v1;

  // Instantiates a client
  const clouddmsClient = new DataMigrationServiceClient();

  async function callDeleteConnectionProfile() {
    // Construct request
    const request = {
      name,
    };

    // Run request
    const [operation] = await clouddmsClient.deleteConnectionProfile(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  callDeleteConnectionProfile();
  // [END datamigration_v1_generated_DataMigrationService_DeleteConnectionProfile_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
