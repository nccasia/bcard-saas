import HomeLayout  from "../../components/home/HomeLayout";
import React, { useState } from 'react';
import Text from "../../components/users/Text"

function TextPage() {
    return (
        <div>
            <HomeLayout>
                <Text/>
            </HomeLayout>   
        </div>
    );
}

export default TextPage;

