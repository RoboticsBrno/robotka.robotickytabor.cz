module Jekyll
    class DivTag < Liquid::Block
        def initialize(tag_name, attrs, tokens)
            super
            @attrs = attrs
        end

        def render(context)
            text = super
            site = context.registers[:site]
            converter = site.find_converter_instance(::Jekyll::Converters::Markdown)
            "<div #{@attrs}>#{converter.convert(text)}</div>"
        end
    end
end

Liquid::Template.register_tag('div', Jekyll::DivTag)
