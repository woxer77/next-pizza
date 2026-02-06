export function mapToOptions<T extends { id: number | string; name: string }>(items: T[]) {
  return items.map(({ id, name }) => ({ value: id.toString(), text: name }));
}
