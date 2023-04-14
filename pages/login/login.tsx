import Head from "next/head";

import Login from "../../components/login/Login";

export default function login() {
  return (
    <div>
      <Head>
        <title>Login | Business Card</title>
      </Head>
      <Login />
    </div>
  );
}
