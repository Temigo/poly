class PhrasePairsController < ApplicationController

  def create
    book = Book.find(params[:book_id])
    if book.phrase_pairs.create(create_params)
      render json: {}, status: :ok
    else
      render json: {}, status: 422
    end
  end

  def destroy
    phrase_pair = PhrasePair.find(params[:id])

    if phrase_pair.destroy!
      render json: { id: params[:id] }, status: :ok
    else
      render json: {}, status: 422
    end
  end

  private

  def create_params
    params.require(:phrase_pair).permit(:target_phrase, :source_phrase)
  end
end