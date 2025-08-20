import React from "react";
import AdminNav from "../../components/admin-components/adminNav";
import Header from "../../components/admin-components/indexHeader";
import IndexBody from "../../components/admin-components/indexBody";
const IndexAdmin = () => {
    return <div className="index-admin">
        <AdminNav />
        <Header />
        <IndexBody />

    </div>;
};

export default IndexAdmin;