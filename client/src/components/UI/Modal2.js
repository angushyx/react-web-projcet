import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import ShippingForm from "../ShippingForm";

export default function FormDialog(props) {
  return (
    <div>
      <Dialog open={props.open} onClose={props.handleClose}>
        <DialogTitle>Edit your address</DialogTitle>
        <DialogContent>
          <ShippingForm />
        </DialogContent>
      </Dialog>
    </div>
  );
}
