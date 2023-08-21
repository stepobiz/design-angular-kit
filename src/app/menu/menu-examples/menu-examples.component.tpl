{% from "../../macro.template.njk" import sanitize as sanitize %}

{% set html %}
  {% include "../menu-example/menu-example.component.html" %}
{% endset %}

{% set typescript %}
  {% include "../menu-example/menu-example.component.ts" %}
{% endset %}

<it-menu-example></it-menu-example>

<it-source-display html="{$ sanitize(html) $}" typescript="{$ sanitize(typescript) $}"></it-source-display>



