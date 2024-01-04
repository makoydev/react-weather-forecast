export const formatDate = (timestamp: number) => {
  const date = new Date(timestamp * 1000);
  return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
};
