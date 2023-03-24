import LayoutUser  from "../../components/home/LayoutUser";
import React, { useState } from 'react';
import Card from "../../components/users/Card"

function CardPage() {
    return (
        <div>
            <LayoutUser>
                <Card/>
            </LayoutUser>   
        </div>
    );
}

export default CardPage;