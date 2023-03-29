import React from 'react'
import Admin from '../../admin/Admin'
import Profile from '../../Profile'
import Card from '../../users/Card'
import Users from '../../users/Users'
interface Iprops {
  TypePage?: string, 
  profile: any
}
export const MainView = (props: Iprops) => {
  console.log(props)
  return (
    <div style={{margin:"80px 0 0 306px", border: '5px solid #dcdcdc', width:'80%', padding: "20px"}}>
      
      
      {/* {props.TypePage && props.TypePage== 'OpenProfile'&& <Profile/>} */}
      {props.TypePage && props.TypePage== 'OpenAdmin'&& <Admin/>}
      {props.TypePage && props.TypePage=='OpenCard'&&<Card />}
      </div>
  )
}
