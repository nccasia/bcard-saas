import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import React from "react";

import KonvaEdit from "../../../components/konvacard/KonvaEdit";
import ShapeEdit from "./ShapeEdit";

function ViewShape({ data, setData }: any) {
  const [open, setOpen] = React.useState(false);
  const [test, setTest] = React.useState(false);
  React.useEffect(() => {
    const test1 =
      data?.length > 0
        ? data.filter((main: any) => main.onclick === true && main.type === "shape").length > 0
          ? true
          : false
        : false;
    setTest(test1);
  }, [data]);
  //console.log(test);
  return (
    <>
      <Accordion expanded={test} onChange={() => setTest(!test)}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          sx={{
            width: "100%",
            borderBottom: "1px solid #8080802e",
            padding: "0 5px",
          }}
        >
          <Typography>Shape</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {!open && (
            <button
              className="bg-green-700 text-white rounded-md px-4 py-2 hover:bg-green-600 my-2 active:bg-green-900"
              onClick={() => setOpen(true)}
            >
              Add Shape
            </button>
          )}
          {!open && <KonvaEdit data={data} setData={setData} setOpen={setOpen} type="shape" />}
          {open && (
            <ShapeEdit item={{}} data={data} setData={setData} type="create" setOpen={setOpen} />
          )}
        </AccordionDetails>
      </Accordion>
    </>
  );
}

export default ViewShape;
