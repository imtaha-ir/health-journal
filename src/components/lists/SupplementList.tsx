import { Stack } from "@mui/material";
import type { Supplement } from "../../types/supplement.type";
import SupplementCard from "../supplementCard/SupplementCard";

interface SupplementListProps {
  supplements: Supplement[];
}

export default function SupplementList({ supplements }: SupplementListProps) {
  return (
    <Stack sx={{ gap: 2 }}>
      {supplements.map((item) => (
        <SupplementCard supplement={item} key={item.id} />
      ))}
    </Stack>
  );
}
