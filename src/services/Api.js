import { api } from "../utils/constants";

export async function fetchAccountDetails(accountId, include = "contacts") {
  try {
    let headersList = {
      "Content-Type": "application/json"
    };

    let response = await fetch(`http://localhost:5000/account/${accountId}`, {
      method: "GET",
      headers: headersList
    });
    // console.log(await response.json());
    return await response.json();
  } catch (error) {
    return {
      error: true
    };
  }
}

export async function updateAccountData(accountId, data) {
  let headersList = {
    Accept: "*/*",
    "Content-Type": "application/json"
  };

  let bodyContent = JSON.stringify({
    accountId: accountId,
    // accountId: "70003729938",
    data: data
  });

  let response = await fetch("http://localhost:5000/account/update", {
    method: "PUT",
    body: bodyContent,
    headers: headersList
  });

  // let data = await response.text();
  // console.log(data);
}
