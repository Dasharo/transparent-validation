# Connecting to MongoDB instance using MongoDB Compass

To connect with database user can use various methods, incl. GUI clients like
**MongoDB Compass**. Instruction below contains steps necessary to connect and
operate the DB with this tool.

### Download and install Compass

> Compass is not available in default APT repositories, so binary from official
> source needs to be downloaded.

1. Go to `https://www.mongodb.com/try/download/compass` and select desired
   system/distribution (latest version by default).
2. Install app by executing downloaded installer, like
   `mongodb-compass_1.25.0_amd64.deb` (on Debian/Ubuntu with default package
   manager, eg *Eddy*).
    - On first run the quick tutorial will be displayed and it can be skipped.

### Using Compass

1. *New Connection* window should appear with `Paste your connection string (SRV
   or Standard)` input. Paste the follow string with provided credentials:
   `mongodb://<USER>:<PASSWORD>@<CLUSTER>:27017/rtr-db?authSource=admin&readPreference=primary&ssl=false`
   and click *Connect*.
2. On successful connection a list of existing databases should be displayed on
   the sidebar. The default database used by RTR is named `rtr-db`.
3. When selected, `Collections` screen should appear. It will contain four
   collections: `clients`, `platforms`, `results`, `tests` along with documents
   (objects) count and for eg *Total Document Size*.
4. When a collection is selected, it will display the documents within it. From
   there user can filter the documents by it's content, add new ones using `ADD
   DATA` button (via file or direct input), and update/delete/duplicate.
5. When inserting new document using `ADD DATA -> Insert Document` by default
   the JSON input modal will appear. It's worth to note that arrays of documents
   (JSON objects) are also a valid input.
