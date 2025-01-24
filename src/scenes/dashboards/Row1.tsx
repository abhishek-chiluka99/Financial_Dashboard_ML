import DashboardBox from '../../components/DashboardBox'
import React from "react";
import { useGetKpisQuery } from '../../state/api';



const Row1 = () => {
    const { data, isLoading, isError, error } = useGetKpisQuery();

    console.log("isLoading:", isLoading);
    console.log("isError:", isError);
    console.log("error:", error);
    console.log("data:", data);

    return (
        <>
            <DashboardBox gridArea="a"></DashboardBox>
            <DashboardBox gridArea="b"></DashboardBox>
            <DashboardBox gridArea="c"></DashboardBox>
        </>
    )
}

export default Row1