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

function main(updateMask, connectionProfile) {
  // [START clouddms_update_connection_profile_sample]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. Field mask is used to specify the fields to be overwritten in the
   *  connection profile resource by the update.
   */
  // const updateMask = ''
  /**
   *  Required. The connection profile parameters to update.
   */
  // const connectionProfile = ''
  /**
   *  A unique id used to identify the request. If the server receives two
   *  requests with the same id, then the second request will be ignored.
   *  It is recommended to always set this value to a UUID.
   *  The id must contain only letters (a-z, A-Z), numbers (0-9), underscores
   *  (_), and hyphens (-). The maximum length is 40 characters.
   */
  // const requestId = 'abc123'

  // Imports the Clouddms library
  const {DataMigrationServiceClient} = require('@google-cloud/dms').v1;

  // Instantiates a client
  const clouddmsClient = new DataMigrationServiceClient();

  async function updateConnectionProfile() {
    // Construct request
    const request = {
      updateMask,
      connectionProfile,
    };

    // Run request
    const [operation] = await clouddmsClient.updateConnectionProfile(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  updateConnectionProfile();
  // [END clouddms_update_connection_profile_sample]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
