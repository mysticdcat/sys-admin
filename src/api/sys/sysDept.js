import http from "@/http/http.js";
export function getDeptList() {
  return http({ url: "/hcsys/sysDept/list", method: "get" });
}

export function addDept(params) {
  return http({ url: "/hcsys/sysDept/save", params, method: "get" });
}

export function udpateDept(params) {
  return http({ url: "/hcsys/sysDept/update", params, method: "get" });
}
