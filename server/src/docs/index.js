const options = {
    definition: {
        openapi: "3.1.0",
        info: {
          title: "Github API Swagger Documentation",
          version: "1.0.0",
          description:
            "This is an API which has been built to interact with the Github API.",
          license: {
            name: "MIT",
            url: "https://spdx.org/licenses/MIT.html",
          },
          contact: {
            name: "Adolfo Chafardett",
            url: "https://github.com/AdolfoChS97",
            email: "adolfo1997a@gmail.com",
          },
        },
        servers: [
          {
            url: "http://localhost:3000",
          },
        ],
      },
      apis: ["./routes/*.js"],
}


module.exports = {
    options
}