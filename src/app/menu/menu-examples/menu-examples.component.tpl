{% from "../../macro.template.njk" import sanitize as sanitize %}


{% set html %}
  {% include "../examples/main-menu-example/main-menu-example.component.html" %}
{% endset %}

{% set typescript %}
  {% include "../examples/main-menu-example/main-menu-example.component.ts" %}
{% endset %}

<it-main-menu-example></it-main-menu-example>

<it-source-display html="{$ sanitize(html) $}" typescript="{$ sanitize(typescript) $}"></it-source-display>


{% set iconhtml %}
  {% include "../examples/icon-menu-example/icon-menu-example.component.html" %}
{% endset %}

{% set icontypescript %}
  {% include "../examples/icon-menu-example/icon-menu-example.component.ts" %}
{% endset %}

<it-icon-menu-example></it-icon-menu-example>

<it-source-display html="{$ sanitize(iconhtml) $}" typescript="{$ sanitize(icontypescript) $}"></it-source-display>


{% set secondaryhtml %}
  {% include "../examples/secondary-menu-example/secondary-menu-example.component.html" %}
{% endset %}

{% set secondarytypescript %}
  {% include "../examples/secondary-menu-example/secondary-menu-example.component.ts" %}
{% endset %}

<it-secondary-menu-example></it-secondary-menu-example>

<it-source-display html="{$ sanitize(secondaryhtml) $}" typescript="{$ sanitize(secondarytypescript) $}"></it-source-display>
