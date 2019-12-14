class ArticlesController < ApplicationController

  def index
    @articles = Article.all
  end

  def show
    @article = Article.find(params[:id])

    # fork { exec ('ruby ./test/Ruby_sel/runtest.rb')}
  
  end



  def say_hello

    # puts "hi there +++++++++++++++++++++++++++"
    fork { exec ('ruby ./test/Ruby_sel/runtest.rb')}
    render json: {"message": "hui"}

  end

  # def link
  #   puts "ho ho ho"
  # end

  # protect_from_forgery with: :exception

  # def hello
  #   render text: "hello, world!"
  # end

  # def button

  #   puts "hi there +++++++++++++++++++++++++++"

  # # fork { exec ('ruby ./test/Ruby_sel/runtest.rb')}

  # end



  def new
  end


  # def button

  #   # puts "hello"
  #   # fork { exec ('npm test')}
    
  #   # fork { exec ('ruby ./test/Ruby_sel/runtest.rb')}

  # end


def create
  @article = Article.new(article_params)

  @article.save
  redirect_to @article
end

private
  def article_params
    params.require(:article).permit(:title, :text)
  end



end
