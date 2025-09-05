module Jekyll
  class Mermaid < Liquid::Block

    def initialize(tag_name, markup, tokens)
      super
    end

    def render(context)
      "<div class=\"dual-color-container\"><div class=\"mermaid dual-color-light w-100 d-flex justify-content-center\">#{super}</div><div class=\"mermaid dual-color-dark w-100 d-flex justify-content-center\">%%{init: {\"theme\": \"dark\"}}%%#{super}</div></div>"
    end
  end
end

Liquid::Template.register_tag('mermaid', Jekyll::Mermaid)