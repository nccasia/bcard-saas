import LayoutUser  from "../../../components/home/LayoutUser";
import Profile  from "../../../components/users/Profile";

function Exampe({params}:any) {
    return(
        <div>
            <LayoutUser>
                <Profile params={params}/>
            </LayoutUser>
        </div>
    )
}

export default Exampe;

export async function getStaticProps({ params }:any) {
    return {
        props: {params}
    }

}

export const getStaticPaths = () => {
    return {
      paths: [],
      fallback: true,
    };
  };
  