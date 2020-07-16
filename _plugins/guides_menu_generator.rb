require "nokogiri"

class GuidesMenuGenerator < Jekyll::Generator
  def generate(site)
    parser = Jekyll::Converters::Markdown.new(site.config)

    colMenus = {}

    site.collections.each_value do |col|
        menu = []
        colMenus[col.label] = menu
        col.docs.each do |doc|
            if doc.data["ext"] != ".md"
                next
            end

            children = []

            html = Nokogiri::HTML(parser.convert(doc.content))
            html.css('h4').each do |h|
                children.push({
                    "name" => h.text,
                    "label" => Jekyll::Utils::slugify(h.text, mode: "default"),
                })
            end

            menu.push({
                "name" => doc.data["name"],
                "doc" => doc,
                "label" => Jekyll::Utils::slugify(doc.data["name"], mode: "default"),
                "children" => children,
            })
        end
    end

    site.data["collectionMenus"] = colMenus
  end
end
