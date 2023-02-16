//company ID: 484929849
//customer ID: 573839293

const login = async (username, password) => {
  const res = await fetch('https://api.okra.ng/v2/mock-api/login', {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, password }),
  })

  if (!res.ok) {
    throw `failed to fetch wallet with status ${res.status}`
  }

  return res.json()
}

const fetchWallet = async (id) => {
  const res = await fetch("https://api.okra.ng/v2/mock-api/fetch-wallet", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ id }),
  });

  if (!res.ok) {
    throw `failed to fetch wallet with status ${res.status} - ${JSON.stringify(await res.json(), null, 2)}`
  }

  return res.json()
};

const refundCustomer = async (company, user, amount) => {
  console.log("Hello, World");

  const wallet = await fetchWallet(user)
  console.log('customer wallet ->', company)
}

// login('okra_user', 'okra_pass')

refundCustomer("484929849", "573839293", 2003.0);
