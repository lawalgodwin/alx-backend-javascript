export default function loadBalancer(chinaDownload, USDownload) {
  return Promise.race([chinaDownload, USDownload])
    .then((data) => data)
    .catch((error) => Error(`Error: ${error.message}`));
}
