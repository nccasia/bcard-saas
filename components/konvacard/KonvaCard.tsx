import MenuIcon from "@mui/icons-material/Menu";
import { Grid } from "@mui/material";
import Link from "next/link";
import React from "react";

import ViewImage from "../../components/konvacard/image/ViewImage";
import KonvaView from "../../components/konvacard/KonvaView";
import ViewShape from "../../components/konvacard/shape/ViewShape";
import ViewText from "../../components/konvacard/text/ViewText";
import EditNewCard from "../button/EditNewCard";

interface Card {
  data: any;
  setData: any;
  name?: string;
  active?: string;
  id?: number;
}

function KonvaCard({ data, setData, name, active, id }: Card) {
  const [openMenu, setOpenMenu] = React.useState(false);
  const [openSave, setOpenSave] = React.useState(false);
  return (
    <div>
      <Grid container sx={{ marginTop: "80px" }}>
        <Grid
          item
          lg={8.4}
          md={8}
          sm={12}
          xs={12}
          sx={{ position: "relative", height: "calc(100vh - 80px)" }}
        >
          <div
            style={{ position: "absolute", bottom: "10px", right: "10px", display: "flex", gap: 3 }}
          >
            <Link href="/admin/card">
              <button className="bg-gray-400 text-white rounded-md px-4 py-2 hover:bg-gray-600 my-2 active:bg-green-900">
                Cancel
              </button>
            </Link>
            <button
              className="bg-gray-400 text-white rounded-md px-4 py-2 hover:bg-gray-600 my-2 active:bg-green-900"
              onClick={() => setOpenSave(true)}
            >
              Save
            </button>
            <EditNewCard
              data={data}
              open={openSave}
              setOpen={setOpenSave}
              active={active}
              id={id}
              name={name}
            />
          </div>
          <div style={{ position: "absolute", top: "10px", left: "10px", display: "flex", gap: 3 }}>
            <h1 style={{ lineHeight: "50px", color: "#f44336" }}>
              <b>
                <i>{name ? "Edit " + name : "Create"}</i>
              </b>
            </h1>
          </div>
          <Grid
            sx={{
              display: { xs: "block", sm: "block", md: "block", lg: "none" },
              position: "absolute",
              top: 0,
              right: "10px",
              zIndex: 12,
            }}
          >
            <button
              className="bg-gray-400 text-white rounded-md px-4 py-2 hover:bg-gray-600 my-2 active:bg-green-900"
              onClick={() => setOpenMenu(!openMenu)}
            >
              <MenuIcon />
            </button>
          </Grid>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              height: "100%",
            }}
          >
            <KonvaView data={data} setData={setData} />
          </div>
        </Grid>
        <Grid
          item
          lg={12}
          md={12}
          sm={12}
          xs={12}
          sx={{
            display: openMenu ? "block" : { xs: "none", sm: "none", md: "block", lg: "block" },
            border: "0.5px dotted gray",
            position: "fixed",
            zIndex: 10,
            width: "300px",
            height: "87vh",
            top: "80px",
            right: 0,
            backgroundColor: "white",
            padding: "0 3px",
            overflow: "auto",
            scrollbarWidth: "thin",
            "&::-webkit-scrollbar": {
              width: "0.3em",
            },
            "&::-webkit-scrollbar-track": {
              background: "#f1f1f1",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "#888",
            },
            "&::-webkit-scrollbar-thumb:hover": {
              background: "#555",
            },
          }}
        >
          <h1 style={{ lineHeight: "50px", marginLeft: "5px" }}>
            <b>Onclick Edit</b>
          </h1>
          <ViewText data={data} setData={setData} />
          <ViewImage data={data} setData={setData} />
          <ViewShape data={data} setData={setData} />
        </Grid>
      </Grid>
    </div>
  );
}
export default KonvaCard;
