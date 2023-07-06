import * as React from "react";
import PropTypes from "prop-types";

import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";

import IconButton from "@mui/material/IconButton";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          {/* <CloseIcon /> */}
          {"X"}
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function CustomizedDialogs(props) {
  const handlepop = () => {
    props.setTrigger(false);
  };

  return (
    <div>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open dialog
      </Button> */}
      {props.handleopen && (
        <BootstrapDialog
          onClose={props.handleClose}
          aria-labelledby="customized-dialog-title"
          // open={open}
          open={props.handleopen}
        >
          <div
            style={{
              background: "linear-gradient(90deg,#2c5364,#203a43,#0f2027)",
              padding: "10px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <div
                onClose={props.handleClose}
                style={{ textAlign: "center", color: "white", margin: "auto" }}
              >
                <h2 style={{ margin: "10px" }}> {props.content.categories}</h2>
              </div>
              <div>
                <button
                  style={{
                    textAlign: "end",
                    background: "transparent",
                    color: "white",
                    border: "none",
                    cursor: "pointer",
                    fontSize: "20px",
                    // fontWeight: "bold",
                  }}
                  onClick={handlepop}
                >
                  X
                </button>
              </div>
            </div>
            {props.loading ? (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  border: "1px solid black",
                  width: "550px",
                }}
              >
                {" "}
                <img
                  style={{ width: "100px", margin: "auto", padding: "20px" }}
                  alt="Loader"
                  src="https://media.tenor.com/wpSo-8CrXqUAAAAi/loading-loading-forever.gif"
                />
              </div>
            ) : (
              <DialogContent style={{ border: "1px solid black" }}>
                <h3 style={{ color: "white" }}>" {props.content.value} "</h3>
              </DialogContent>
            )}

            <div style={{ textAlign: "center" }}>
              <button
                style={{
                  width: "50%",
                  padding: "15px",
                  margin: "20px",
                  textAlign: "center",
                  backgroundColor: "#1D4ED8",
                  color: "black",
                  fontWeight: "bold",
                  borderRadius: "10px",
                  fontSize: "18px",
                  cursor: "pointer",
                }}
                onClick={props.onClick}
              >
                Next joke
              </button>
            </div>
          </div>
        </BootstrapDialog>
      )}
    </div>
  );
}
