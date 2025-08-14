module Jekyll
  class Mermaid < Liquid::Block

    def initialize(tag_name, markup, tokens)
      super
    end

    def render(context)
      "<div class=\"mermaid w-100 d-flex justify-content-center\">#{super}</div>"
    end
  end
end

Liquid::Template.register_tag('mermaid', Jekyll::Mermaid)