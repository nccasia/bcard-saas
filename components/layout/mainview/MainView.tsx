import React from 'react'
import Admin from '../../admin/Admin'
import Users from '../../users/Users'
interface Iprops {
  TypePage: string
}
export const MainView = (props: Iprops) => {

  return (
    <div style={{margin:"80px 0 0 306px", border: '5px solid #dcdcdc', width:'80%', padding: "20px"}}>
      
      
      {props.TypePage && props.TypePage== 'OpenAdmin'&& <Admin/>}
      {props.TypePage && props.TypePage=='OpenCard'&& <Users/>}
      </div>
  )
}
