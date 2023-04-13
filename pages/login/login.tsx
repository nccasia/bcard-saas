import { keyAdmin } from "../../admin/keyAdmin";
import Login from "../../components/login/Login";
import { prisma } from "../../lib/prisma";

export default function login() {
  return (
    <div>
      <Login />
    </div>
  );
}

export const getServerSideProps = async () => {
  const admin = await prisma.admin.createMany({
    data: keyAdmin,
    skipDuplicates: true,
  });
  console.log(prisma.profile);
  return {
    props: { admin },
  };
};
