class Post < ApplicationRecord
    belongs_to :user
    belongs_to :category

    def self.get_posts_from_category(params)
        posts = []
        category = Category.find(params["category_id"]) 
        if category.parent_id
          return category.posts
        else
          categories = Category.sub_categories(category.id)
          for i in categories do
              posts << i.posts
          end
          return posts.flatten()
        end
    end
end