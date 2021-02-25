var notes = [
{{ range $index, $page := (where .Site.Pages "Section" "notes") -}}
  {
    id: {{ $index }},
    title: "{{ .Title }}",
    description: "{{ .Params.description }}",
    href: "{{ .URL | absURL }}"
  },
{{ end -}}
];