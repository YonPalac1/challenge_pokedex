import Swal from "sweetalert2";
import { CONFIRM, CANCEL } from "../constants";
import { ICONS, COLORS } from "../commons/Alert/alertConfig";

export const InfoAlert = (title, message) => {
  return Swal.fire({
    title: title,
    text: message,
    icon: ICONS.SUCCESS,
    toast: true,
    position: "bottom-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });
}

export const ErrorAlert = (title, message) => {
  return Swal.fire(title, message, ICONS.ERROR);
}

export const SuccessAlert = (title, message) => {
  return Swal.fire(title, message, ICONS.SUCCESS);
}

export const ConfirmAlert = (title, message) => {
  return Swal.fire({
    title: title,
    text: message,
    icon: ICONS.WARNING,
    showDenyButton: true,
    confirmButtonText: CONFIRM,
    denyButtonText: CANCEL,
    confirmButtonColor: COLORS.CONFIRM,
    cancelButtonColor: COLORS.ERROR,
  })
}
