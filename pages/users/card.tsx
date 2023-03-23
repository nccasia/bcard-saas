import HomeLayout  from "../../components/home/HomeLayout";
import React, { useState } from 'react';
import Card from "../../components/users/Card"

function CardPage() {
    return (
        <div>
            <HomeLayout>
                <Card/>
            </HomeLayout>   
        </div>
    );
}

export default CardPage;