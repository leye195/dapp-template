"use client";

import { CSSProperties, ComponentProps, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { useClickAway } from "react-use";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { createPortalRoot } from "@/lib/utils";
import {
  dimmer,
  modalBlock,
  modalBox,
  modalHeader,
  modalHeaderTitle,
} from "./style.css";
import Button from "@/components/Button";

interface Props extends ComponentProps<"div"> {
  isOpen: boolean;
  isHideClose?: boolean;
  shouldCloseOnDimmer?: boolean;
  removeDimmer?: boolean;
  headerTitle?: string | JSX.Element;
  width?: CSSProperties["width"];
  height?: CSSProperties["height"];
  padding?: CSSProperties["padding"];
  titleFontSize?: CSSProperties["fontSize"];
  handleOpen: (isOpen: boolean) => void;
}

const Modal = ({
  isOpen,
  isHideClose,
  shouldCloseOnDimmer,
  headerTitle,
  removeDimmer = false,
  padding = "2rem",
  titleFontSize = "24px",
  width = "330px",
  height = "auto",
  handleOpen,
  children,
}: Props) => {
  const ref = useRef(null);
  const portalRootRef = useRef<HTMLDivElement | null>(null);
  const bodyRef = useRef<HTMLBodyElement | null>(null);

  if (!portalRootRef.current)
    portalRootRef.current =
      (document.getElementById("portal-root") as HTMLDivElement) ||
      createPortalRoot("portal-root");

  useClickAway(ref, () => {
    if (!shouldCloseOnDimmer) return;

    handleOpen(false);
  });

  useEffect(() => {
    bodyRef.current = document.querySelector("body");

    if (bodyRef.current) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const portal = portalRootRef.current!;
      bodyRef.current.appendChild(portal);
    }
  }, []);

  if (!isOpen) return null;

  return createPortal(
    <div className={modalBlock}>
      <div
        className={dimmer}
        style={{
          backgroundColor: removeDimmer ? "transparent" : "rgba(0,0,0, 0.8)",
        }}
      >
        <div
          className={modalBox}
          ref={ref}
          style={{
            padding,
            width,
            height,
          }}
        >
          <div className={modalHeader}>
            <div
              className={modalHeaderTitle}
              style={{
                fontSize: titleFontSize,
              }}
            >
              {headerTitle}
            </div>
            {!isHideClose && (
              <Button padding="0" onClick={() => handleOpen(false)}>
                <FontAwesomeIcon icon={faClose} />
              </Button>
            )}
          </div>
          {children}
        </div>
      </div>
    </div>,
    portalRootRef.current
  );
};

export default Modal;
