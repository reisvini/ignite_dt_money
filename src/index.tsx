import { createServer, Model } from "miragejs";
import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "Freelance de Website",
          type: "deposit",
          category: "Dev",
          amount: 6000,
          createdAt: new Date("2021-04-14 09:00:00"),
        },
        {
          id: 2,
          title: "Pagamento Fatura Abril",
          type: "withdraw",
          category: "Finanças",
          amount: 2650,
          createdAt: new Date("2021-02-14 11:00:00"),
        },
        {
          id: 3,
          title: "Freelance de Website",
          type: "deposit",
          category: "Dev",
          amount: 5500,
          createdAt: new Date("2021-02-16 09:00:00"),
        },
        {
          id: 4,
          title: "Peças computador",
          type: "withdraw",
          category: "Computador",
          amount: 4500,
          createdAt: new Date("2021-02-16 20:00:00"),
        },
      ],
    });
  },

  routes() {
    this.namespace = "api";

    this.get("/transactions", () => {
      return this.schema.all("transaction");
    });

    this.post("/transactions", (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create("transaction", data);
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
