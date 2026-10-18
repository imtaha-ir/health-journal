import { useEffect, useState } from "react";
import { type Supplement } from "../../types/supplement.type";
import { getSupplements } from "../../services/supplement.service";
import { Fab } from "@mui/material";
import { Add } from "@mui/icons-material";
import SupplementList from "../../components/lists/SupplementList";

export default function SupplementsPage() {
  const [supplements, setSupplements] = useState<Supplement[]>([]);
  const handleAddClick = () => {
    // TODO: reserved to implement add function
    console.log("Add clicked");
  };
  useEffect(() => {
    setSupplements(getSupplements());
  }, []);
  return (
    <>
      <SupplementList supplements={supplements} />
      <Fab
        color="primary"
        aria-label="add"
        size="medium"
        sx={{ position: "fixed", right: 32, bottom: 32 }}
        onClick={handleAddClick}
      >
        <Add />
      </Fab>
    </>
  );
}
