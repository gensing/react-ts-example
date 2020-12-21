import React from "react";

export function Maybe(props: { isLogin: boolean; children: any }) {
  return <>{props.isLogin ? props.children : null}</>;
}
