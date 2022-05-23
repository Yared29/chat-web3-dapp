import sanityClient from "@sanity/client";

export const client = sanityClient({
  projectId: "t9nlpa5s",
  dataset: "production",
  apiVersion: "v1",
  token:
    "skedxGErYm1Cw1isESZ49BV1Jwzr1yID0CRiPc6xwxBJEacnhwaLEkoXqoUwGkQ7O4bKxG8nz2kBoydBkGiwxtKenfzwKDgkPCFWFpNmcUgRdor7RG1VYaXeGpvtaoffYMkCVEGlGPYN1jSyZxlbQzXwhUuTxcDiuEdg25bLWLyfSPW1GU1y",
  useCdn: false,
});
